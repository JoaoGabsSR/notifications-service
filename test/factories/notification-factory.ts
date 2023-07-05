import { Content } from "@app/entities/content";
import { Notification, NotificationProps } from "@app/entities/notification";

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}): Notification {
    return new Notification({
        category: 'social',
        content: new Content('Nova soliciatção de amizade!'),
        recipientId: 'recipient-1',
        ...override
    });
}