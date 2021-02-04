export interface Result {
    args:    Args;
    headers: { [key: string]: string };
    url:     string;
}

export interface Args {
    foo1: string;
    foo2: string;
}

export interface ChosenResult {
    args:    ChosenArgs;
    headers: { [key: string]: string };
    url:     string;
}

export interface ChosenArgs{
    Name: string;
    Surname: string;
}