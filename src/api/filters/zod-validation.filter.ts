import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ZodValidationException } from 'nestjs-zod';
import { ZodError } from 'zod';

@Catch(ZodValidationException)
export class ZodValidationFilter implements ExceptionFilter {
  catch(exception: ZodValidationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    const zodError = exception.getZodError() as ZodError;

    response.status(status).json({
      message: 'Validation failed',
      errors: zodError.issues.map(issue => ({
        field: issue.path.join('.'),
        message: issue.message,
      })),
    });
  }
}
