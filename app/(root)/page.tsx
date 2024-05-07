import React from 'react';
import { HeaderBox, TotalBalanceBox, RightSidebar } from '@/components/index';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.name || 'Guest'}
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
