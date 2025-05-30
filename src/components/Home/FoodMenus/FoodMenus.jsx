import React from 'react';
import { GiRiceCooker } from 'react-icons/gi';
import './style.css'

const FoodMenus = () => {
    return (
        <div className='bg-yellow-950 text-white'>
            <div className='flex justify-center items-center flex-col md:p-10 px-1 pb-10 pt-6'>
                 <GiRiceCooker size={50}/>
                <h1 className='dancing-font text-3xl  font-bold pt-3 pb-2'>Enjoy an exceptional</h1>
                <p className='md:text-4xl text-3xl font-semibold pb-2'>SEASONAL & DELICIOUS</p>
                <p className='md:text-4xl text-3xl font-semibold'>FOOD MENUS</p>
            </div>
            <div className='md:w-8/12 w-11/12 mx-auto md:space-y-10 space-y-5'>
            <div className='flex gap-10 flex-col lg:flex-row'>
                <img className='w-[500px] md:rounded-tl-[300px] rounded-tl-[200px] md:h-[550px] h-[430px] object-fill' src="/img/22.jpg" alt="" />
                <div>
                <div className='md:w-[175px] w-6/12 '>
                   <h1 className='text-3xl bg-yellow-600 mb-4 p-2 rounded-md uppercase'>Appetizers</h1>
                   </div>
                    <div>
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Greek Salad ---------------  $19.95</h1>
                       <p>Sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.</p>       
                        </div>                
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Tortilla Espanola ----------  $22.95</h1>
                       <p>Spanish omelette made of egg, potato, and onion cooked in olive oil.</p>       
                        </div>                
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Lasagna Bolognese------ $28.95</h1>
                       <p>Fresh lasagna noodles, Bolognese ragú, béchamel sauce and Parmesan cheese.</p>       
                        </div>                
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Olivas Rellenas------------  $34.95</h1>
                       <p>Olives, pitted, anchovy fillets cut in small pieces, pimentos chopped, clove, garlic mashed</p>       
                        </div>                
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Verduras Con Olivada ---  $47.95</h1>
                       <p>Mira esta rica receta de Vegetales multicolor con Olivada para dipear.</p>       
                        </div>                
                    </div>
                </div>
            </div>
            <div className='flex flex-col-reverse gap-10 md:flex-col lg:flex-row'>
            <div>
            <div className='md:w-[200px] w-7/12 '>
                   <h1 className='text-3xl bg-yellow-600 mb-4 p-2 rounded-md uppercase'>Main dishes</h1>
                   </div>
                    <div>
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-1'>Sashimi Sushi Set -------- $19.95</h1>
                       <p>Sushi grade tuna filet, sushi grade salmon filet, Fresh coriander</p>       
                        </div>                
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Grilled Beef Steak -------  $22.95</h1>
                       <p>4 beef steaks, about 3/4 inch thick porterhouse, rib eye, sirloin</p>       
                        </div>                
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Lasagna Bolognese------ $28.95</h1>
                       <p>Fresh lasagna noodles, Bolognese ragú, béchamel sauce and Parmesan cheese.</p>       
                        </div>                
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Roast Chicken Drumsticks-  $34.95</h1>
                       <p>Chicken drumsticks, olive oil, sea salt, black pepper, garlic powder, smoked</p>       
                        </div>                
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Paella Mixta (Meat & Seafood)
                       -----  $47.95</h1>
                       <p>Paella Mixta is a paella recipe where you combine both seafood and meat ingredients. </p>       
                        </div>                
                    </div>
                </div>
                <img className='w-[500px] rounded-t-[250px] md:h-[550px] h-[430px]' src="/img/16.jpg" alt="" />
                
            </div>
            <div className='flex gap-10 flex-col lg:flex-row'>
                <img className='w-[500px] rounded-br-[250px] md:h-[550px] h-[430px]' src="/img/iç3.jpg" alt="" />
                <div>
                <div className='md:w-[170px] w-6/12 '>
                   <h1 className='text-3xl bg-yellow-600 mb-4 p-2 rounded-md uppercase'>beverages</h1>
                   </div>
                    <div>
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-1'>Gin Cocktails -----------  $16.95</h1>
                       <p>Explore Awebani Gin's cocktail recipes for easy to make and delicious gin cocktails.</p>       
                        </div>                
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Bloody Mary -----------  $22.95</h1>
                       <p>Including Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery</p>       
                        </div>                
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Prickly Pear Tonic------- $28.95</h1>
                       <p>Paired Simply with fresh lemons, this mixer captures the magic of the desert.</p>       
                        </div>                
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Coffee Latte--------------  $34.95</h1>
                       <p>Drink made primarily from espresso and steamed milk.</p>       
                        </div>                
                       <div className='pb-10'>
                       <h1 className='text-2xl font-semibold pb-2'>Verduras Con Olivada ---  $47.95</h1>
                       <p>Mira esta rica receta de Vegetales multicolor con Olivada para dipear.</p>       
                        </div>                
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FoodMenus;