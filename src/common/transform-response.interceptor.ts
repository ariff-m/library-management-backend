import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response) => {
        const data = response.data ? response.data : response;
        const message = response.message
          ? response.message
          : 'Operation Success';
        return {
          status: 'success',
          code: context.switchToHttp().getResponse().statusCode,
          message,
          data,
        };
      }),
    );
  }
}
