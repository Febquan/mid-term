import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
  Link,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { logoutSetState } from "../store/authSlice";
import { useQueryClient } from "@tanstack/react-query";
import api from "../axios/axios";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
export default function MyPopupUser() {
  const queryClient = useQueryClient();
  const { data } = useQuery({ queryKey: ["userInfo"] });
  const userInfo = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogOut = async () => {
    try {
      const res = await api.post("/user/logout");
      if (res.data.success) {
        dispatch(logoutSetState());
        queryClient.removeQueries(["userInfo"]);
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Dropdown
      showArrow
      radius="sm"
      classNames={{
        base: "before:bg-default-200", // change arrow background
        content: "p-0 border-small border-divider bg-background",
      }}
    >
      <DropdownTrigger>
        <User
          name={userInfo.userName}
          description={userInfo.email}
          classNames={{
            name: "text-default-600",
            description: "text-default-500",
          }}
          avatarProps={{
            size: "sm",
            src: "https://avatars.githubusercontent.com/u/30373425?v=4",
          }}
        />
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Custom item styles"
        disabledKeys={["profile"]}
        className="p-3"
        itemClasses={{
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        }}
      >
        <DropdownSection aria-label="Profile & Actions" showDivider>
          <DropdownItem
            key="changeinfor"
            as={Link}
            onClick={() => {
              navigate("/Info");
            }}
          >
            Change Information
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="logout" onClick={onLogOut}>
            Log Out
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
