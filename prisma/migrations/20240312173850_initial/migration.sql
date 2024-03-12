-- CreateEnum
CREATE TYPE "PayableStatus" AS ENUM ('PAID', 'WAITING_FUNDS');

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "numberCard" TEXT NOT NULL,
    "cardHolder" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "cvv" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payable" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "status" "PayableStatus" NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payable_transactionId_key" ON "Payable"("transactionId");

-- AddForeignKey
ALTER TABLE "Payable" ADD CONSTRAINT "Payable_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
