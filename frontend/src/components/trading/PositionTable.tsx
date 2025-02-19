import React from 'react';
import { Table } from 'antd';
import { useAppSelector } from '@/hooks/store';
import type { RootState } from '@/store';

export const PositionTable: React.FC = () => {
  const { positions, loading } = useAppSelector((state: RootState) => state.trading);

  const columns = [
    { title: 'Symbol', dataIndex: 'symbol', key: 'symbol' },
    { title: 'Size', dataIndex: 'size', key: 'size' },
    { title: 'Entry Price', dataIndex: 'entryPrice', key: 'entryPrice' },
    { title: 'Current Price', dataIndex: 'currentPrice', key: 'currentPrice' },
    { title: 'PnL', dataIndex: 'pnl', key: 'pnl' },
  ];

  return <Table dataSource={positions} columns={columns} loading={loading} />;
};
