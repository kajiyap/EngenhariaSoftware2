// src/RepairRequestManager.ts
import { RepairRequest } from './RepairRequest';

export class RepairRequestManager {
    private requests: RepairRequest[] = [];
    private currentId: number = 1;

    createRequest(description: string): void {
        const newRequest = new RepairRequest(this.currentId++, description);
        this.requests.push(newRequest);
        console.log(`Solicitação de conserto criada: ${newRequest.id}`);
    }

    listRequests(): void {
        console.log("\nLista de Solicitações de Conserto:");
        this.requests.forEach(request => {
            console.log(`${request.id}: ${request.description} (Aprovado: ${request.approved})`);
        });
    }

    deleteRequest(id: number): void {
        this.requests = this.requests.filter(request => request.id !== id);
        console.log(`Solicitação de conserto ${id} excluída.`);
    }

    approveRequest(id: number): void {
        const request = this.requests.find(request => request.id === id);
        if (request) {
            request.approved = true;
            console.log(`Solicitação de conserto ${id} aprovada.`);
        } else {
            console.log(`Solicitação de conserto ${id} não encontrada.`);
        }
    }
}