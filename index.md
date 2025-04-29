---
layout: home

hero:
  name: "我的个人博客"
  text: "分享我的思考与经验"
  tagline: "技术、生活、阅读与思考"
  image:
    src: /images/avatar.png
    alt: "个人头像"
  actions:
    - theme: brand
      text: 开始阅读
      link: /articles/
    - theme: alt
      text: 关于我
      link: /about/

features:
  - icon: 📝
    title: 技术博文
    details: 分享我在编程和技术领域的学习心得与实践经验
    link: /articles/tech/
  - icon: 🌱
    title: 生活随笔
    details: 记录日常生活中的点滴思考和感悟
    link: /articles/life/
  - icon: 📚
    title: 读书笔记
    details: 分享我读过的好书和从中获得的启发
    link: /articles/books/
  # - icon: 🔮
  #   title: 项目展示
  #   details: 展示我的个人项目和作品集
  #   link: /projects/
---

<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()
const posts = ref([
  {
    title: '如何使用 VitePress 搭建个人博客',
    date: '2025-04-21',
    description: '本文详细介绍了如何使用 VitePress 从零开始搭建一个美观实用的个人博客...',
    link: '/articles/tech/vitepress-blog',
    tags: ['VitePress', 'Vue', '博客']
  },
  {
    title: '我的2025年阅读计划',
    date: '2025-04-15',
    description: '新的一年，我为自己制定了一份阅读计划，包括技术书籍、文学作品和哲学著作...',
    link: '/articles/books/reading-plan-2025',
    tags: ['阅读', '计划', '书籍']
  },
  {
    title: '远程工作一年的感受与思考',
    date: '2025-04-10',
    description: '过去一年我一直在远程工作，这里分享我的经验、挑战以及应对方法...',
    link: '/articles/life/remote-work-experience',
    tags: ['远程工作', '生活方式', '效率']
  }
])
</script>

<div class="featured-posts">
  <h2>最新文章</h2>
  <div class="post-grid">
    <div v-for="post in posts" :key="post.title" class="post-card">
      <div class="post-card-content">
        <div class="post-meta">
          <span class="post-date">{{ post.date }}</span>
          <div class="post-tags">
            <span v-for="tag in post.tags" :key="tag" class="post-tag">{{ tag }}</span>
          </div>
        </div>
        <h3 class="post-title">
          <a :href="post.link">{{ post.title }}</a>
        </h3>
        <p class="post-description">{{ post.description }}</p>
        <a :href="post.link" class="read-more">阅读全文 →</a>
      </div>
    </div>
  </div>
</div>

<!-- <div class="newsletter-section">
  <h2>订阅我的博客</h2>
  <p>获取最新文章和更新通知</p>
  <div class="newsletter-form">
    <input type="email" placeholder="您的邮箱地址" />
    <button>订阅</button>
  </div>
</div> -->

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #bd34fe, #41d1ff);
  --vp-c-brand: #646cff;
  --vp-c-brand-light: #747bff;
}

.featured-posts {
  max-width: 1152px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.featured-posts h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.post-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: var(--vp-c-bg-soft);
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.post-card-content {
  padding: 1.5rem;
}

.post-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.post-tags {
  display: flex;
  gap: 0.5rem;
}

.post-tag {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: var(--vp-c-brand-dimm);
  color: var(--vp-c-brand);
  font-size: 0.75rem;
}

.post-title {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.4;
}

.post-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.post-title a:hover {
  color: var(--vp-c-brand);
}

.post-description {
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.read-more {
  display: inline-block;
  font-weight: 500;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}

.newsletter-section {
  max-width: 1152px;
  margin: 3rem auto;
  padding: 3rem 1.5rem;
  text-align: center;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.newsletter-section h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.newsletter-section p {
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-2);
}

.newsletter-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  gap: 0.5rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.newsletter-form button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: var(--vp-c-brand);
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.newsletter-form button:hover {
  background-color: var(--vp-c-brand-light);
}

@media (max-width: 768px) {
  .post-grid {
    grid-template-columns: 1fr;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-form button {
    width: 100%;
  }
}
</style>
