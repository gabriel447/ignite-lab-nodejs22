import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['unique-airedale-12236-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'dW5pcXVlLWFpcmVkYWxlLTEyMjM2JOLMIhXrBbfr98bjydZFvF38yzg06uphEig',
                    password: '5abd68ee74394d059723f128a91e4432',
                },
                ssl: true,
            },
        });
    }
    
    async onModuleDestroy() {
       await this.close();
    }
}