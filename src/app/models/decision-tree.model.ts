export interface DecisionTreeModel {
  id: string;
  text: string;
  type: DecisionTypeEnum;
  previous: string;
  inputType: InputTypeEnum;
  options?: Options[];
  image?: string;
}

interface Options {
  answer: string;
  route: string;
}

export enum DecisionTypeEnum {
  QUESTION = 'QUESTION',
  ANSWER = 'ANSWER'
}

export enum InputTypeEnum {
  BUTTON = 'BUTTON',
  RADIO = 'RADIO',
  NONE = 'NONE'
}
