describe("studyMinutesArranger",()=>{
    it("returns an array of values sorted from least to greatest",()=>{
      const studyMinutesWeek1 = {
        sunday: 90,
        monday: 30,
        tuesday: 20,
        wednesday: 15,
        thursday: 30,
        friday: 15,
        saturday: 60
      
      }
      
  const studyMinutesWeek2 = {
    sunday: 100,
    monday: 10,
    tuesday: 45,
    wednesday: 60,
    thursday: 20,
    friday: 15,
    saturday: 65
  }
      
       expect(studyMinutesArranger(studyMinutesWeek1).toEqual(15,15,20,30,30,60,90))
       expect(studyMinutesArranger(studyMinutesWeek2).toEqual(10,15,20,45,60,65,100))
    })
  })
  