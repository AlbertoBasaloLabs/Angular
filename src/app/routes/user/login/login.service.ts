import { HttpClient } from "@angular/common/http";
import { effect, inject, Injectable, Signal, signal } from "@angular/core";
import { GlobalStore } from "../../../shared/global/global.store";
import { UserTokenDto } from "../../../shared/global/user-token.dto.type";
import { LoginDto } from "./login-dto.type";

@Injectable({
  providedIn: "root",
})
export class LoginStoreService {
  private http = inject(HttpClient);
  private globalStore = inject(GlobalStore);
  private url = "http://localhost:3000/users/login";

  public userToken = signal<UserTokenDto | undefined>(undefined);
  private loginError = signal<string | undefined>(undefined);

  private userTokenEffect = effect(() => {
    const userToken = this.userToken();
    console.log("LoginStoreService - userToken changed", userToken);
    if (!userToken) return;
    this.globalStore.changeUserToken(userToken);
  });

  public error: Signal<string | undefined> = this.loginError.asReadonly();

  public login(loginDto: LoginDto): void {
    this.userToken.set(undefined);
    this.loginError.set(undefined);
    this.http.post<UserTokenDto>(this.url, loginDto).subscribe({
      next: (userToken) => this.userToken.set(userToken),
      error: (error) => this.loginError.set(error.message.replace(this.url, "")),
    });
  }
}
