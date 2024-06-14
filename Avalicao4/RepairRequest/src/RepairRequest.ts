export interface RepairRequest {
    id: number;
    description: string;
    approved: boolean;
}

export class RepairRequest {
    constructor(public id: number, public description: string) {
        this.approved = false;
    }
}
