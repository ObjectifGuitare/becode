const dayOfTheWeek = Number(prompt('Enter a number between 1 and 7'))

if(dayOfTheWeek < 1 || dayOfTheWeek > 7){
  alert('Are you kidding me?!')
}
else if(dayOfTheWeek === 1){ console.log('Monday') }
else if(dayOfTheWeek === 2){ console.log('Tuesday') }
else if(dayOfTheWeek === 3){ console.log('Wednesday') }
else if(dayOfTheWeek === 4){ console.log('Thursday') }
else if(dayOfTheWeek === 5){ console.log('Friday') }
else if(dayOfTheWeek === 6){ console.log('Saturday') }
else if(dayOfTheWeek === 7){ console.log('Sunday') }