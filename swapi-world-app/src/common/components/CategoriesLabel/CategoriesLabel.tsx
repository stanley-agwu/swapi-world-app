import { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'common/api/store/hooks';
import { CategoriesEnum } from 'common/utils/categoriesEnum';
import { getDashboardCategoryRoute } from 'common/utils/common';

import { Tab, Tabs } from '../Tabs/Tabs';

import styles from './CategoriesLabel.module.scss';

const CategoriesLabel = () => {
  const categories = [CategoriesEnum.planets, CategoriesEnum.people, CategoriesEnum.starships];
  const activeCategory = useAppSelector((state) => state.swapi.category.title);
  const activeIndex = categories.findIndex((category) => category === activeCategory);
  const [tabIndex, setTabIndex] = useState(activeIndex === -1 ? 0 : activeIndex);
  const navigate = useNavigate();

  const handleCategoryChange = (e: SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
    navigate(getDashboardCategoryRoute(categories[newValue]));
  };

  useEffect(() => {
    setTabIndex(activeIndex);
  }, [activeCategory]);

  return (
    <div className={styles.categories}>
      <Tabs value={tabIndex} handleChange={handleCategoryChange}>
        {categories.map((category) => (
          <Tab key={category} label={category} />
        ))}
      </Tabs>
    </div>
  );
};

export default CategoriesLabel;
