export enum SelectedPage {
    Başlanğıc = "başlanğıc",
    Üstünlüklər = "üstünlüklər",
    Dərslər = "dərslər",
    Əlaqə = "əlaqə",
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ClassType {
    name: string;
    description?: string;
    image: string;
}