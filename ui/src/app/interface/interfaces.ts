export interface IDenialLetter {
  id: string;
  package: number;
  denialText: string;
  createdDateTime: string;
  prompt: string;
}

export interface IAppealLetter {
  package: 35;
  prompt: string;
  appeal: string;
  id: string;
  createdDateTime: string;
}
