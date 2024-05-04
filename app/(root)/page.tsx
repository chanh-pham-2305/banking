import React from 'react';
import { HeaderBox, TotalBalanceBox, RightSidebar } from '@/components/index';
const Home = () => {
  const loggedIn = { firstName: 'Alex' , lastName: 'James'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently. "
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={2000.25}
          />
        </header>
        {/* <RecentTransactions /> */}
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[]}
      />
    </section>
  );
};

export default Home;
