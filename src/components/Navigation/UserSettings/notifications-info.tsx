import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { NotificationsInfoProps } from "./props.type";

export default function NotificationsInfo({
  notifications,
  setNotifications,
}: NotificationsInfoProps) {
  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const removeNotification = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="max-h-96 overflow-y-auto">
      {notifications.length === 0 ? (
        <div className=" text-center text-muted-foreground">
          No notification yet
        </div>
      ) : (
        notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 border-b last:border-b-0  transition-colors ${
              !notification.read ? "bg-foreground/5" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getTypeColor(
                  notification.type
                )}`}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${
                        !notification.read ? "font-semibold" : ""
                      }`}
                    >
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {notification.time}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <Check className="h-3 w-3" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => removeNotification(notification.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
