import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Roles } from '../../shared/enums/roles.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const headers = context.switchToHttp().getRequest().headers;
    return headers.role === Roles.ADMIN || headers.role === Roles.SELLER;
  }
}
