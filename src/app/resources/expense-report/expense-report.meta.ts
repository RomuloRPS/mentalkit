import { ExpenseReportStatusEnum } from "src/app/coloquent-model/expense-report/expense-report.model";
import { GenericMetaItem } from "../generic.meta";

export const expenseReportStatusMeta: Array<GenericMetaItem> = [
    {
        name: 'Aberto',
        value: ExpenseReportStatusEnum.OPEN,
    },
    {
        name: 'Enviado',
        value: ExpenseReportStatusEnum.SENT
    },
    {
        name: 'Visualizado',
        value: ExpenseReportStatusEnum.VISUALIZED
    },
    {
        name: 'Em Revisão',
        value: ExpenseReportStatusEnum.IN_APPROVING_PROCESS
    },
    {
        name: 'Edição Requisitada',
        value: ExpenseReportStatusEnum.EDITION_REQUEST
    },
    {
        name: 'Aprovado',
        value: ExpenseReportStatusEnum.APPROVED
    },
    {
        name: 'Aprovado com Excessão',
        value: ExpenseReportStatusEnum.APPROVED_WITH_EXCEPTIONS
    },
    {
        name: 'Pago',
        value: ExpenseReportStatusEnum.PAID
    },
];

export const statusBadgeColors = {
    [ExpenseReportStatusEnum.OPEN]: 'bg-blue-500',
    [ExpenseReportStatusEnum.SENT]: 'bg-ultramarine-500',
    [ExpenseReportStatusEnum.CONFLICT]: 'bg-red-500',
    [ExpenseReportStatusEnum.PAID]: 'bg-yellow-500',
    [ExpenseReportStatusEnum.APPROVED]: 'bg-green-500',
    [ExpenseReportStatusEnum.VISUALIZED]: 'bg-gray-500',
    [ExpenseReportStatusEnum.EDITION_REQUEST]: 'bg-orange-500',
    [ExpenseReportStatusEnum.IN_APPROVING_PROCESS]: 'bg-gray-700',
    [ExpenseReportStatusEnum.APPROVED_WITH_EXCEPTIONS]: 'bg-red-700',
};
