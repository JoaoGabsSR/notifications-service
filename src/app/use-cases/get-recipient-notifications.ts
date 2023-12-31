import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { Notification } from "@app/entities/notification";

interface IGetRecipientNotificationsRequest { recipientId: string }

interface IGetRecipientNotificationsResponse {
    notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {

    constructor(
        private notificationsRepository: NotificationsRepository
    ) { }

    async execute(request: IGetRecipientNotificationsRequest): Promise<IGetRecipientNotificationsResponse> {
        const { recipientId } = request;
        const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

        return {
            notifications
        };
    }

}