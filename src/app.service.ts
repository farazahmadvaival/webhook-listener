import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  webhook(body: any) {
    const webhookURL =
      'https://chat.googleapis.com/v1/spaces/AAAAiEwYO9Q/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=ve3xkMOpvKSil-3eX6yc2efv47zLoI9TMI5JJY8QR-0';

    console.log(body);
    const data = JSON.stringify({
      text: JSON.stringify(body.repository),
    });

    return this.fetch(webhookURL, data);
  }

  func(body: { message: string; title: string }) {
    const webhookURL = `${process.env.WEBHOOK_URL}`;

    const messages = `*${body.title}*:  ${body.message}`;

    const data = JSON.stringify({
      text: messages,
    });

    this.fetch(webhookURL, data);
  }

  async fetch(webhookURL: string, data: any) {
    let resp;
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: data,
    }).then((response) => {
      resp = response;
      console.log(response);
    });
    return resp;
  }
}
