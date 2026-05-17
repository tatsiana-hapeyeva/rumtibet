import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import { API_URL } from "../shared/config/baseUrl.js";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Button from "../components/button";
import { SectionContainer } from "../components/sectionContainer";
import UserAvatar from "../components/avatar";
import ProfileField from "../components/profile-field";
import "../assets/styles/profile.css";

type User = {
  id: number;
  photo: string;
  name: string;
  surname: string;
  email: string;
  city: string;
  about: string;
  notifications: boolean;
};

export function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [originalUser, setOriginalUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<{ name?: string; surname?: string }>({});

  useEffect(() => {
    axios.get<User[]>(`${API_URL}/users`).then((response) => {
      setUser(response.data[0]);
      setOriginalUser(response.data[0]);
    });
  }, []);

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (!user) return;

    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });

    if (name === "name" || name === "surname") {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSave = () => {
    if (user === null || originalUser === null) return;

    const newErrors: { name?: string; surname?: string } = {};

    if (!user.name.trim()) {
      newErrors.name = "Имя обязательно";
    }

    if (!user.surname.trim()) {
      newErrors.surname = "Фамилия обязательна";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const changedFields: Partial<User> = {};

    if (user.name !== originalUser.name) {
      changedFields.name = user.name.trim();
    }

    if (user.surname !== originalUser.surname) {
      changedFields.surname = user.surname.trim();
    }

    if (user.city !== originalUser.city) {
      changedFields.city = user.city;
    }

    if (user.about !== originalUser.about) {
      changedFields.about = user.about;
    }

    if (user.notifications !== originalUser.notifications) {
      changedFields.notifications = user.notifications;
    }

    if (Object.keys(changedFields).length === 0) return;

    axios
      .patch<User>(`${API_URL}/users/${user.id}`, changedFields)
      .then((response) => {
        setUser(response.data);
        setOriginalUser(response.data);
        setErrors({});
        console.log("Сохранение прошло успешно");
      })
      .catch((error) => {
        console.error("Ошибка при сохранении:", error);
      });
  };

  const handleCancel = () => {
    if (originalUser === null) return;

    setUser(originalUser);
    setErrors({});
  };

  const isDirty =
    user !== null &&
    originalUser !== null &&
    JSON.stringify(user) !== JSON.stringify(originalUser);

  if (!user) return null;

  return (
    <section className="profile-page">
      <SectionContainer>
        <div className="profile-page__content profile-page__column">
          <Typography variant="h1" component="h1">
            Профиль пользователя
          </Typography>

          <div className="profile-page__main">
            <div className="profile-page__avatar">
              <UserAvatar
                alt={`${user.name} ${user.surname}`}
                src={user.photo}
              />
            </div>

            <div className="profile-page__fields profile-page__column">
              <ProfileField
                label="Имя"
                name="name"
                value={user.name}
                required
                error={Boolean(errors.name)}
                helperText={errors.name}
                onChange={handleFieldChange}
              />

              <ProfileField
                label="Фамилия"
                name="surname"
                value={user.surname}
                required
                error={Boolean(errors.surname)}
                helperText={errors.surname}
                onChange={handleFieldChange}
              />

              <ProfileField
                label="Email"
                name="email"
                value={user.email}
                editable={false}
              />

              <ProfileField
                label="Город"
                name="city"
                value={user.city}
                onChange={handleFieldChange}
              />

              <ProfileField
                label="О себе"
                name="about"
                value={user.about}
                multiline
                onChange={handleFieldChange}
              />

              <div className="profile-page__switch">
                Уведомления:
                <Switch
                  checked={user.notifications}
                  onChange={(event) =>
                    setUser({
                      ...user,
                      notifications: event.target.checked,
                    })
                  }
                />
              </div>

              <div className="profile-buttons">
                <Button onClick={handleSave} disabled={!isDirty}>
                  Сохранить
                </Button>
                <Button tone="light" onClick={handleCancel} disabled={!isDirty}>
                  Отменить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
