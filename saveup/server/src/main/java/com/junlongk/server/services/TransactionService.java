package com.junlongk.server.services;

import com.junlongk.server.models.Transaction;
import com.junlongk.server.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepo;

    public String addTransaction(Transaction transaction, String userId) {
        // Generate transaction ID
        String transactionId = UUID.randomUUID().toString();
        transaction.setTransactionId(transactionId);

        transaction.setUserId(userId);

        transactionRepo.addTransaction(transaction);

        return transactionId;
    }

    public Optional<List<Transaction>> getAllTransactions(
            String userId) {
        return transactionRepo.getAllTransactions(userId);
    }

    public String modifyTransaction(
            String transactionId, Transaction transaction) {
        Transaction updated =
                transactionRepo.modifyTransaction(transactionId, transaction);
        return updated.getTransactionId();
    }

    public String deleteTransaction(String transactionId) {
        Transaction deleted =
                transactionRepo.deleteTransaction(transactionId);
        return deleted.getTransactionId();
    }

    public String getUserIdByTransactionId(String transactionId) {
        return transactionRepo.getUserIdFromTransactionId(transactionId);
    }

    public int updateAccountName(String accountId, String newAccountName) {
        return transactionRepo.updateAccountName(accountId, newAccountName);
    }

    public Optional<String> getAllCategories(
            String userId) {
        return transactionRepo.getAllCategories(userId);
    }

    public int deleteTransactionByTransferId(String transferId) {

        return transactionRepo.deleteTransactionByTransferId(transferId);
    }
}
