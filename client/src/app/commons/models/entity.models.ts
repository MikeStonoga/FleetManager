export interface EntityView {
    id: string;
    code: number;
    creatorId: string;
    creationTime: Date;
    lastModifierId?: string;
    lastModificationTime?: Date;
}

export interface IdCodeAndLabelDTO {
    id: string;
    code: number;
    label: string;
}