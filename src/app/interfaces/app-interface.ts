import { DialogType } from "../enums/app-enums";

export interface SystemDialog {
  title: string;
  message: string;
  type: DialogType;
  options?: { width: number; height: number };
}
