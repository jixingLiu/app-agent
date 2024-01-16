import React, { useEffect, useState } from 'react';
import { Image } from '@nutui/nutui-react-taro';
import { useRouter } from '@tarojs/taro';
import { getNoticeById } from '@/api/common';
import { formatDate } from '@/utils/index';
import ReactHtmlParser from 'react-html-parser';
import DOMPurify from 'dompurify';
import './index.scss';

interface ArticleProps {
  id: string;
  coverImage: string;
  noticeTitle: string;
  createTime: string;
  noticeContent: string;
  updateBy?: string;
}

const Article: React.FC = () => {
  const router = useRouter();
  const routerParams = router.params || {};
  const { id = '', type } = routerParams;

  const [article, setArticle] = useState<ArticleProps | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await getNoticeById(id);
        const { data } = res;
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  if (!article?.noticeTitle) return null;

  const sanitizedContent = DOMPurify.sanitize(article.noticeContent);

  return (
    <div>
      {/* <Image src={article.coverImage} /> */}
      <div className='px-4'>
        {
          !type ? (
            <div className='text-slate-800 text-sm items-baseline py-4'>
              <div className='flex-1 mb-2'>{article.noticeTitle}</div>
              <div className='flex justify-between items-center text-right text-xs text-gray-600'>
                <span>作者：{article.updateBy}</span>
                <span>{formatDate(new Date(article.createTime), 'YYYY年MM月DD日')}</span>
              </div>
            </div>
          ) : (
            <div className='pt-12'></div>
          )
        }
        
        <div className='quill-content'>{ReactHtmlParser(sanitizedContent)}</div>
      </div>
    </div>
  );
};

export default Article;
