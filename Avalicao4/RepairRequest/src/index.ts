// src/index.ts
import { RepairRequestManager } from './RepairRequestManager';
import * as readline from 'readline';

const manager = new RepairRequestManager();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu(): void {
    console.log(`
1. Criar solicitação de conserto
2. Listar solicitações de conserto
3. Excluir solicitação de conserto
4. Aprovar solicitação de conserto
5. Sair
`);
    rl.question('Escolha uma opção: ', (option) => {
        switch (option) {
            case '1':
                rl.question('Descrição do conserto: ', (description) => {
                    manager.createRequest(description);
                    showMenu();
                });
                break;
            case '2':
                manager.listRequests();
                showMenu();
                break;
            case '3':
                rl.question('ID da solicitação a ser excluída: ', (id) => {
                    manager.deleteRequest(parseInt(id));
                    showMenu();
                });
                break;
            case '4':
                rl.question('ID da solicitação a ser aprovada: ', (id) => {
                    manager.approveRequest(parseInt(id));
                    showMenu();
                });
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Opção inválida.');
                showMenu();
                break;
        }
    });
}

showMenu();