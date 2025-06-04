"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "../../../ui/badge";
import { Bell } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import NotificationsInfo from "./notifications-info";
import { NotificationProps } from "./props.type";

const initialNotifications: NotificationProps[] = [
  {
    id: 1,
    title: "New Message",
    message: "You have received a new message from John Doe",
    time: "2 min ago",
    read: false,
    type: "info",
  },
  {
    id: 2,
    title: "Payment Successful",
    message: "Your payment of $99.99 has been processed successfully",
    time: "1 hour ago",
    read: false,
    type: "success",
  },
  {
    id: 3,
    title: "System Update",
    message: "System maintenance scheduled for tonight at 2 AM",
    time: "3 hours ago",
    read: false,
    type: "warning",
  },
  {
    id: 4,
    title: "Welcome!",
    message: "Welcome to our platform! Get started by exploring features",
    time: "1 day ago",
    read: true,
    type: "info",
  },
];

export default function Notifications() {
  const [notifications, setNotifications] =
    useState<NotificationProps[]>(initialNotifications);

  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };

  return (
    <div className="flex items-center justify-center">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="relative rounded-full h-8 w-8"
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs font-medium"
              >
                {unreadCount > 99 ? "99+" : unreadCount}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-80 p-0" align="end">
          <div className="flex items-center justify-between p-4">
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Notifications</span>
              <span className="text-sm text-muted-foreground">
                {unreadCount > 0
                  ? `You have ${unreadCount} unread notification${
                      unreadCount > 1 ? "s" : ""
                    }`
                  : "All caught up!"}
              </span>
            </div>
            {unreadCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={markAllAsRead}
                className="text-xs"
              >
                Mark all read
              </Button>
            )}
          </div>

          <Separator />

          <NotificationsInfo
            notifications={notifications}
            setNotifications={setNotifications}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
