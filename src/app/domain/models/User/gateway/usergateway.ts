import { Observable } from "rxjs";
import { User } from "../user";

export abstract class UserGateway {
    constructor() {
    }

    abstract login(email: string, password: string): Observable<User>
}