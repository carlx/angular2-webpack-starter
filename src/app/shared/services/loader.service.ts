import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class LoaderService {
  contentIsLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
