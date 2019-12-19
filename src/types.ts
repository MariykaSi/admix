export interface INavItem {
    title: String;
    link: String;
    image: String;
}

export interface IDataItem {
    id: Number;
    name: String;
    value: String;
    currency?: String;
    extraCharacter?: String;
    margin: String;
    valueIncreased: Boolean;
    icon: String;
}

export interface IAppItem {
    id: Number;
    title: String;
    price: Number;
    currency: String;
    margin: String;
    valueIncreased: Boolean;
    icon: String;
    status: String;
}

export interface IMyAppsState {
    data: IDataItem[];
    apps: IAppItem[];
    error: String;
    loading: Boolean;
}

export interface IApplicationState {
    myApps: IMyAppsState;
}
