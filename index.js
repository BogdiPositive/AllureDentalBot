
const {Telegraf, Markup, Telegram
} = require('telegraf')
require("dotenv").config()
const path = require('path')
const my_const = require('./const')
const bot = new Telegraf(process.env.BOT_TOKEN)




bot.start( async (ctx) => {
  try{
 await ctx.replyWithHTML(`Для вашего удобства мы разработали систему получения краткой, но емкой информации по часто задаваемым вопросам <b>(FAQ)</b> Для навигации используйте кнопку <b>Menu</b>`)
 await ctx.replyWithPhoto({
  source : ('./img/menu.jpg')
 })
} catch (e) {
  console.error(e)
}
})

bot.help((ctx) => ctx.reply(my_const.commands))

//Команда

bot.command('team', async (ctx) => {
  try {
    await ctx. replyWithPhoto({
      source : ('./img/GSG.jpg')
    })
    await ctx. replyWithHTML('<b>Гиряев Сергей Геннадиевич</b> основатель и руководитель клиники.')
    
    await ctx. replyWithPhoto({
      source : ('./img/Bogdi.jpg')
    })
    await ctx. replyWithHTML('<b>Россов Богдан Витальевич</b> Врач-стоматолог ортопед-терапевт.')
    
    await ctx. replyWithPhoto({
      source : ('./img/AnnaA.jpg')
    })
    await ctx. replyWithHTML('<b>Кадзаева Анна Андреевна</b> Врач-стоматолог эстетист.')
    
    await ctx. replyWithPhoto({
      source : ('./img/AnnaM.jpg')
    })
    await ctx. replyWithHTML('<b>Ягубова Анна Михайловна</b> Врач-стоматолог ортодонт.')
    
    await ctx. replyWithPhoto({
      source : ('./img/galchonok.jpg')
    })
    await ctx. replyWithHTML('<b>Агзямова Гулия Гамилевна</b> наш администратор и ваш бессменный помощник по любым вопросам.')

    
  } catch (e) { 
    console.error(e)

  }
})

// Консультация 

bot.command('consultation', async (ctx) => {
  try {
    await ctx.replyWithHTML(`
    ▪️Консультация главного врача - <b>3.000₽ 
    </b>
    ▪️Консультация врача специалиста - <b>2.000₽</b> 
    /терапевт / ортопед / ортодонт 
    
    ⚪️комплексная консультация - <b>5.000 ₽ </b>
        В консультацию входит:
        
        • фотопротокол интраоральный + студия
        
        • составление и разбор полного плана лечения 
        
        • снятие диагностических оттисков  и изготовление диагностических моделей 
        
    
        В большинстве случаев при первичной консультации необходимо провести одно из рентген исследований полости рта:
        
        1. ОПТГ (2D снимок, даёт обзорную картину) -<b>1.500₽</b>
        2. КТ (3D снимок, даёт полноценную картину и возможность делать срезы и смотреть каждый зуб со всех 3х сторон) -<b>4.000₽</b>
    `)
  } catch (e) {
    console.error(e)
  }
})


//Проф гигиена

bot.command('clean', async (ctx) => {
  try {
    await ctx.replyWithHTML(`
    Стоимость комплексной профессиональной гигиены полости рта <b>8.000 ₽</b> 

    В процедуру входит:
    
    <b>1)</b> ультразвук (<b>при наличии показаний</b>)
    
    <b>2)</b> порошкоструйный аппарат <b>Air Flow EMS (Швейцария)</b>
    
    <b>3)</b> полировка системой Enchanse,придающей гладкость и блеск зубу 
    
    <b>4)</b> флоссинг и штрипсинг контактных поверхностей зубов
    
    <b>5)</b> реминерализирующая  терапия препаратами на основе органического фтора и кальция для укрепления зубов
  
    ✔️В работе используются оригинальные препараты и оборудование последнего поколения, что делает процедуру очень комфортной и безболезненной`)
  } catch (e) {
    console.error(e)
  }
})


//Виниры

bot.command('veneers', async (ctx) => {
  try {
    await ctx.replyWithHTML(`
    ☑️Основные отличия керамических винир от композитных:

    ✔️Качество материала. 
Керамические виниры в связи со спецификой изготовления не имеют усадки (не изменяют форму и цвет ), что делает их долговечными и прочными. 
Композит - это реставрационный пломбировочный  материал, который со временем требует замены из-за усадки краевого прилегания к зубу 
    
    ✔️Препарирование (обточка) под композит практически не требуется. 

     При фиксации керамики необходимо создать уступ и «посадочное гнездо», для этого зубы пришлифовывают преимущественно в пределах эмали на 1-2 мм
    
    ❗️Необходимо понимать, что снять композитные виниры после установки уже невозможно, так как после обработки зуб теряет свой блеск и структуру, даже без обточки.
  
    ✔️Композитные виниры чаще всего делают за 1 посещение непосредственно в полости рта (<b>4 часа на одну челюсть</b>).

       Керамические виниры требуют высокотехнологичной лабораторной работы с предварительным планированием улыбки (Digital smile design) и нескольких посещений врача, что увеличивает сроки работы.
   
    ✔️Гарантия на композитные виниры <b>1</b> год, 
      на керамические виниры пожизненная при соблюдении рекомендаций и гарантийных обязательств. 
    
    ✔️Средний срок службы композитных винир <b>5 лет</b>, керамики <b>15-20 лет</b> исходя из общей статистики.

    ✔️Существенная разница в стоимости: 
       1 ед. композитного винира <b>10.000₽</b>, 
       1 ед.керамического винира от <b>40.000₽</b>.
    `,Markup.inlineKeyboard(
    [
        [Markup.button.callback('Композитные виниры', 'veneers_1'), Markup.button.callback('Керамические виниры', 'veneers_2')]
    ]
    ) )
  } catch (e) {
    console.error(e)
  }
})



//Реставрация

bot.command('resto', async (ctx) => {
  try {
    await ctx.replyWithHTML(`
     Стоимость художественной реставрации любой сложности <b>10.000 ₽</b> 

     В процедуру входит:
    
     ▪️ Местная аппликационная анестезия гелем.
    
     ▪️ Анестезия (<b>Артикаин 1:200000</b>).
    
     ▪️ Препарирование кариозной полости. 
    
     ▪️ Изоляция рабочего поля с помощью системы <b>Раббердам</b>.
    
     ▪️ Непосредственно реставрация подготовленной полости с использованием современных адгезивных протоколов.
     
     ▪️ Полировка системой Enchanse,придающая гладкость и блеск реставрации. 
  
    ✔️В работе используются оригинальные препараты и оборудование последнего поколения, что делает процедуру очень комфортной и безболезненной`)
  } catch (e) {
    console.error(e)
  }
})









//Отбеливание

bot.command('whitening', async (ctx) =>{

try {
  await ctx.replyWithHTML(`
Стоимость отбеливания зубов - <b>18.000 ₽</b>

⚡️Отбеливание оригинальной американской системой <b>ZOOM4!</b>
  

Перед процедурой отбеливания может понадобиться профессиональная гигиена полости рта: стоимость- <b>8.000 ₽</b>
  
В процедуру профессиональной гигиены полости рта входит:
  
<b>1)</b> ультразвук (при наличии показаний ) 
  
<b>2)</b> порошкоструйный аппарат <b>Air Flow EMS (Швейцария)</b>
  
<b>3)</b> полировка системой Enchanse,придающей гладкость и блеск зубу 
  
<b>4)</b> флоссинг и штрипсинг контактных поверхностей зубов
  
<b>5)</b> реминерализирующая  терапия препаратами на основе органического фтора и кальция для укрепления зубов
  
  ❗️Хотим обратить Ваше внимание, что реминерализирующую терапию необходимо будет делать также после отбеливания в домашних условиях на ночь в комбинации с «домашнем отбеливанием» (для усиления/закрепления результата после отбеливания)
  
  Для того, чтобы реминерализирующий/отбеливающий гель оставался на зубах и не смешивался со слюной лучше всего изготовить индивидуальные каппы <i>(5.000р за 1 челюсть)</i>
  

  Резюмируя, комплекс мероприятий для правильного отбеливания должен выглядеть следующим образом:
  
<b>1.</b> Профессиональная гигиена <b>(8.000 ₽)</b>
  
<b>2.</b> Отбеливание (<b>18.000 ₽</b>)
  
<b>3.</b> Реминерализирующая терапия/домашнее отбеливание с помощью индивидуальных капп (<b>10.000 ₽</b>)
  
  При таком подходе ткани зуба наполняются необходимыми микроэлементами, что делает отбеливание не только безопасным, но и полезным для эмали и дентина.
  
  ✔️ Стоимость всего комплекса <b>35.000 ₽</b>`)
} catch (e) { 
  console.error(e)
}
})



//Эндо


bot.command('endo', async (ctx) => {
  try {
    await ctx.replyWithHTML(`Эндодонтическое лечение(корневых каналов зубов). 
   `,Markup.inlineKeyboard(
    [
        [Markup.button.callback('Первичное эндо', 'endo_1'), Markup.button.callback('Вторичное эндо', 'endo_2')]
    ]
    ))
  } catch (e) {
    console.error(e)
  }
})



//Удаление зубов 


bot.command('extractions', async (ctx) => {
  try {
    await ctx.replyWithHTML(`
    Стоимость удаления зуба мудрости указана за единицу, в зависимости от аномалии положение : 
    
    •Без аномалии положения - <b>5.000 ₽</b>
    •Дистопированный зуб - <b>9.000 ₽</b>
    •Полуретенция зуба - <b>12.500 ₽ </b>
    •Ретинированный зуб - <b>15.000 ₽</b>
    •Импакция - <b>20.000 ₽</b>

    ▪️Дистопирвоанный зуб - наклонённый , выдвинутый вперед или повернутый по своей оси
    ▪️Полуретенция зуба - не полностью прорезавшийся зуб
    ▪️Ретинированный зуб- зачаток зуба не прорезывается полностью из кости или десны
    ▪️Импакция - зуб находится в кости, под десной и наклонён к корню соседнего зуба
    
    Осмотр после удаления на 3 и 7 сутки
   `)
  } catch (e) {
    console.error(e)
  }
})


//имплантация

bot.command('implant', async (ctx) => {
  try {
    await ctx.replyWithHTML(`
    
 🔑 Стоимость установки 1 импланта <b>40.000 ₽ «под ключ»</b>

 🌎 Система  имплантов Hiossen (США, Пенсильвания) Osstem (Южная Корея, Сеул) 
 
 После установки импланта необходимо дождаться его полной остеинтеграции (приживления) около <b>3- 4 месяцев.</b>
 
 Следующим этапом для получения доступа к шахте импланта проводим установку формирователя десневой манжеты и ждём около 10-21 дней (стоимость <b>5.000 ₽</b> )
 
 Последующий этап предполагает работу с контуром десны, восстановление и формирование естественных десневых барьеров вокруг соединения имплант-коронка. Для этого изготавливают временную коронку на 10-21 день (стоимость <b>8000 ₽</b> ) и корректируют десну, а уже после снимают оттиски для изготовления постоянной коронки (безметалловая коронка из диоксида циркония  с опорой на имплант с индивидуальным абатментом - <b>50.000 ₽</b> )
 
 Итого:
 
   1.	Имплант (3-6 месяцев) <b>40.000 ₽ </b>
 
   2.	Формирователь (10-21 день) <b>5.000 ₽ </b>
 
   3.	Временная коронка (10-21 день) <b>10.000 ₽ </b>
 
   4.	Постоянная коронка <b>60.000 ₽ 
   </b>
 ❗️Также необходимо понимать, что имплант устанавливается в <b>костную ткань</b>, а не в десну, и, в случае недостатка кости, перед или во время установки импланта, проводят <b>костную/десневую пластику, что увеличивает стоимость работы и сроки остеинтеграции (приживления).</b>
 `)
} catch (e) {
    console.error(e)
  }
})

//Ортодонтия

bot.command('retainer', async (ctx) => {
  try {
    await ctx.replyWithHTML(`
    Средний срок ортодонтического лечения, т.е. лечение на брекетах/элайнерах (невидимых прозрачных каппах) составляет: 
  <b>1 год 3 месяца - 1 год 6 месяцев</b>, с посещением 1 раз в месяц врача ортодонта (Ягубовой А. М.)  
   `, Markup.inlineKeyboard(
    [
        [Markup.button.callback('Брекеты', 'retainer_1'), Markup.button.callback('Элайнеры', 'retainer_2')]
    ]
    ))
  } catch (e) {
    console.error(e)
  }
})

//Контакты

bot.command('contacts', async (ctx) => {
  try {
    await ctx.reply('Москва, Ботанический переулок 16.')
    await ctx.replyWithContact('+7 916 766 0106', 'AllureDental')
    await ctx.replyWithHTML(`<a href="https://instagram.com/dr_gsg?igshid=YmMyMTA2M2Y=">Instagram</a>`)
    await ctx.reply('info.alluredental@mail.ru') 
  } catch (e) {
    console.error(e)
  }
})




// Действие кнопки адресса


bot.command('address', async (ctx) => {
  try {
     await ctx.replyWithLocation(55.778958,37.639015)
     await ctx.replyWithPhoto({
      source: ('./img/enter1.JPEG')
     })
     await ctx.replyWithPhoto({
      source: ('./img/enter2.JPEG')
     })
     await ctx.replyWithHTML(my_const.textAdress)
     await ctx.replyWithPhoto({
      source: ('./img/parking1.JPEG')
     })
     await ctx.replyWithPhoto({
      source: ('./img/parking2.JPEG')
     })
  } catch (e) {
    console.error(e)
  }

  })

// Действие кнопки Инфо

bot.action('btn_info', async (ctx) => {
  try {
    await ctx.answerCbQuery()
     await ctx.reply(my_const.commands)
  } catch (e) {
    console.error(e)
  }

  })


 

 // Записаться

 bot.command('appointment', async (ctx) =>{
  try {
     const user = ctx.from.username 
     if (user != undefined) {
      await ctx.replyWithHTML('Наш администратор скоро свяжется с вами')
      await ctx.telegram.sendMessage(-1001716780767, user)
     }
    else{
    const textUser = ctx.message.text
    const ChatId = ctx.chat.id
    const MessageID = ctx.message.id
    await ctx.replyWithHTML('Напишите пожалуйста ваше <b>Имя, Фамилию и номер телефона.</b> Наш администратор скоро свяжется с вами.')
    await bot.on('text', (ctx) => ctx.telegram.sendMessage(-1001716780767, ctx.message.text))
   
    }
  }catch (e) {
    console.error(e)
  }
  }
 )


 bot.command('cons', async (ctx) => {
  try {
    
    
   }
   catch (e) {
   console.error(e)
 }}
 )
 
// Функция действия кнопки без добавления кнопок


function addActionBotLast (id_btn, src_img, text, preview) {
  bot.action(id_btn, async (ctx) => {
    try {
      await ctx.answerCbQuery()
      if (src_img !== false) {
        await ctx.replyWithPhoto({
          source: src_img
        })
      }
      await ctx.replyWithHTML(text, {
        disable_web_page_preview: preview
       
      })
      
    } catch (e) {
      console.error(e)
    }
  })
}




//Функция действия с кнопками

function addActionBot (id_btn, src_img, text, keyboard=[[]], preview) {
  bot.action(id_btn, async (ctx) => {
    try {
      await ctx.answerCbQuery()
      if (src_img !== false) {
        await ctx.replyWithPhoto({
          source: src_img
        })
      }
      await ctx.replyWithHTML(text, {
        disable_web_page_preview: preview,
        reply_markup: JSON.stringify({"inline_keyboard": keyboard})
      })
      
    } catch (e) {
      console.error(e)
    }
  })
}


 //Запуск кнопок


//Виниры

addActionBot('veneers_1', false, my_const.text1,
  [
      [Markup.button.callback('Керамические виниры', 'veneers_2')]
  ]
   ,false)

addActionBot('veneers_2', false, my_const.text2,
  [
      [Markup.button.callback('Композитные виниры', 'veneers_1')]
  ]
  ,false)


//Ортодонтия
addActionBot('retainer_1', false, my_const.text3, 
[
  [Markup.button.callback('Элайнеры', 'retainer_2')]
],false)

addActionBot('retainer_2', false, my_const.text4,
[
  [Markup.button.callback('Брекеты', 'retainer_1')]
],false)


//"Эндо"
addActionBot('endo_1', false, my_const.text5, 
[
  [Markup.button.callback('Вторичное эндо', 'endo_2')]
],false)

addActionBot('endo_2', false, my_const.text6,
[
  [Markup.button.callback('Первичное эндо', 'endo_1')]
],false)






bot.launch();






process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))