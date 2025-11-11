export interface EntityView {
    id: string;
    code: number;
    creatorId: string;
    creationTime: Date;
    lastModifierId?: string;
    lastModificationTime?: Date;
}