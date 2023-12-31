import SideMenu from '../components/sideMenu';
import TopBar from '@/components/topBar';
import GraduationIcon from '@/components/icons/graduation';
import BookmarkIcon from '@/components/icons/bookmark';
import PaymentIcon from '@/components/icons/payment';
import UsersIcon from '@/components/icons/users';
import DashboardCards from '@/components/dashboardCards';
import Head from 'next/head';

export default function Dashboard() {
  const cards = [
    {
      icon: (
        <GraduationIcon
          color='#74C1ED'
          width='48'
        />
      ),
      title: 'Students',
      count: '100',
      bgColor: 'bg-blue-50',
      redirectTo: '/students',
      queries: { page: 1, pageSize: 6 },
    },
    {
      icon: (
        <BookmarkIcon
          color='#EE95C5'
          width='28'
        />
      ),
      title: 'Course',
      count: '13',
      bgColor: 'bg-pink-50',
      redirectTo: '/dashboard',
    },
    {
      icon: (
        <PaymentIcon
          color='#F6C762'
          width='35'
        />
      ),
      title: 'Payments',
      count: '556,000',
      currency: '₺',
      bgColor: 'bg-yellow-50',
      redirectTo: '/dashboard',
    },
    {
      icon: (
        <UsersIcon
          color='#FFF'
          width='34'
        />
      ),
      title: 'Users',
      count: '3',
      bgColor: 'bg-gradient-134deg from-themeColor to-themeColor-lighter',
      textColor: 'text-white',
      redirectTo: '/dashboard',
    },
  ];

  return (
    <div className='flex bg-white text-black w-full h-screen overflow-x-hidden'>
      <Head>
        <title>Dashboard | SVFP</title>
        <meta
          property='og:title'
          content='Dashboard | SVFP'
        />
        <meta
          property='twitter:title'
          content='Dashboard | SVFP'
        />
      </Head>
      <SideMenu
        userImage='/images/dummyAvatar.webp'
        name='John'
        surname='Doe'
        role='Admin'
      />
      <main className='w-full'>
        <TopBar />
        <section className='py-4 px-6'>
          <DashboardCards items={cards} />
        </section>
      </main>
    </div>
  );
}
