import cn from 'classnames';
import { format } from 'date-fns';
import styles from './Menu.module.css';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'services', icon: <CoursesIcon />, id: TopLevelCategory.Services },
    { route: 'books', name: 'books', icon: <CoursesIcon />, id: TopLevelCategory.Books },
    { route: 'products', name: 'products', icon: <CoursesIcon />, id: TopLevelCategory.Products },
]

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div key={menu.route}>
                        <a href={`/${menu.route}`}>
                            <div className={cn(styles.firstLevel, {
                                [styles.firstLevelActive]: menu.id == firstCategory
                            })}>
                                {menu.icon}
                                <span >{menu.name}</span>
                            </div>
                        </a>
                        {menu.id == firstCategory && buildSecondLevel()}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = () => {
        return (
            <div>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel()}
                        </div>
                    </div>
                ))};
            </div>
        )
    };

    const buildThirdLevel = () => {
        
    };
    
    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
}