import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecisionTree } from '../decision-tree';
import { DecisionTreeModel, InputTypeEnum } from '../models/decision-tree.model';
import { of, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-decision-tree',
  templateUrl: './decision-tree.component.html',
  styleUrls: ['./decision-tree.component.scss']
})
export class DecisionTreeComponent implements OnInit, OnDestroy {
  question: DecisionTreeModel | undefined;
  public inputTypeEnum = InputTypeEnum;
  private readonly destroy$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute?.firstChild?.params.pipe(
      switchMap((param: any) => {
        return of(DecisionTree.find((value: DecisionTreeModel) => value.id === param.id));
      }),
      takeUntil(this.destroy$)
    ).subscribe((res: DecisionTreeModel | undefined) => {
      this.question = res || DecisionTree[0];
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
