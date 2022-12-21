import { Module } from '@nestjs/common';
import { notificationsController } from './kafka/controllers/notifications.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [],
  providers: [
    KafkaConsumerService
  ],
  controllers: [notificationsController],
})
export class MessagingModule {}
