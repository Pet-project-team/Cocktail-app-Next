'use client';

import { useParams } from 'next/navigation';
import CocktailPage from '@/components/pages/CocktailPage';

export default function CocktailPageByID() {
  const params = useParams<{ id: string }>();
  const id = parseInt(params.id);
  return <CocktailPage id={id} />;
}
