import MailForm from '@/components/MailForm/MailForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="text-2xl font-semibold mb-4">お問い合わせフォーム</h2>
      <MailForm />
    </main>
  );
}
