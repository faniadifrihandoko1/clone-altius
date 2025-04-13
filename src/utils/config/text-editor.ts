import { Jodit } from "jodit-react";
import type { IControlType } from "jodit/esm/types";
import { IJodit } from "jodit/esm/types";

export const editorConfig: any = {
  uploader: {
    insertImageAsBase64URI: true,
  },
  minHeight: 300,
  maxHeight: 420,
  buttons: Jodit.defaultOptions.buttons,
  extraButtons: ["insertVariable"],
  removeButtons: ["fullsize", "about"],

  controls: {
    insertVariable: {
      name: "insertVariable",
      tooltip: "Sisipkan Variabel",
      icon: "plus",
      list: {
        employeeName: "Sisipkan Nama Pegawai",
        employeeSalary: "Sisipkan Gaji Pegawai",
      },
      childTemplate: (key: string, value: string) =>
        `<span data-value="${key}">${value}</span>`,
      exec: (
        editor: IJodit,
        _event: MouseEvent,
        { control }: { control: IControlType }
      ) => {
        const key = control.args?.[0] as string;
        const variableMap: Record<string, string> = {
          employeeName: "{employeeName}",
          employeeSalary: "{employeeSalary}",
        };
        if (key && variableMap[key]) {
          editor.s.insertHTML(variableMap[key]);
        }
      },
    },
  },
};
