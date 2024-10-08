import * as apiModel from "./api/movements-list.api-model";
import * as viewModel from "./movements-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementVm[] =>
    movementList.map((movement) => ({
      id: movement.id,
      description: movement.description,
      amount: movement.amount,
      balance: movement.balance,
      transaction: new Date(movement.transaction),
      realTransaction: new Date(movement.realTransaction),
      accountId: movement.accountId,
    }), [])


