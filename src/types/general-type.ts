export interface GeneralOption {
  label: string;
  id: string | number;
}

export type NavbarItem = {
  path?: any;
  name: string;
  icon?: string;
  children?: NavbarItem[];
  is_locked_for_trial?: boolean;
  locale?: string;
  idmenu?: string;
};
