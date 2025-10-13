import { HttpInterceptorFn, HttpResponse } from "@angular/common/http";
import { of } from "rxjs";
import { RegisterDto } from "../routes/user/register/register-dto.type";
import { LoginDto } from "../routes/user/login/login-dto.type";
import { UserDto } from "../shared/global/user-token.dto.type";

export const usersFakeInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.includes("users") ) {
    return next(req);
  }
  const user: UserDto = {
    id: "1",
    email: "user@fake.com",
    name: "Fake User",
  };
  if( req.url.endsWith("/me") ) {
    return of(
      new HttpResponse({
        status: 200,
        body: user,
      })
    );
  }
  const token = "a_fake_token" + new Date().getTime();
  const body: RegisterDto | LoginDto = (req.body as RegisterDto | LoginDto) ;
  if( body && body.email ) user.email = body.email;
  if( body && (body as any).name ) user.name = (body as any).name;
  return of(
    new HttpResponse({
      status: 201,
      body: {
        user,
        token,
      },
    })
  );
};
