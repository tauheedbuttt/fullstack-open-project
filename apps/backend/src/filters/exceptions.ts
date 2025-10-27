import { HttpException, HttpStatus } from "@nestjs/common";

export class BaseHttpException extends HttpException {
  constructor(message: string, status: number, data?: any) {
    super({ message, data }, status);
  }
}

export class NotFound extends BaseHttpException {
  constructor(message: string, data?: any) {
    super(message, HttpStatus.NOT_FOUND, data);
  }
}

export class Forbidden extends BaseHttpException {
  constructor(message: string, data?: any) {
    super(message, HttpStatus.FORBIDDEN, data);
  }
}

export class BadRequest extends BaseHttpException {
  constructor(message: string, data?: any) {
    super(message, HttpStatus.BAD_REQUEST, data);
  }
}

export class Unauthorized extends BaseHttpException {
  constructor(message: string, data?: any) {
    super(message, HttpStatus.UNAUTHORIZED, data);
  }
}
