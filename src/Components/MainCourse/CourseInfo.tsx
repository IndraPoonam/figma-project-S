import React, { Component } from 'react'

interface inputType{
    name:string
}

interface Props{
    handleAddThemeClick: () => void;
    // handleAddMockClick = () => void;
}



export default class CourseInfo extends Component<Props> {

    constructor(props:Props){
        super(props)
      }
    




    //   handleAddThemeClick = () => {
    //     const newTheme: Theme = {
    //       title: `Theme ${this.state.themes.length + 1}`,
    //       description: `Description ${this.state.themes.length + 1}`,
    //       lessons: [],
    //     };
    //     this.setState((prevState) => ({
    //       themes: [...prevState.themes, newTheme],
    //     }));
    //   };
    
    //     handleAddMockClick = () => {
    //       const newMock: Mock = {
    //         title: `Mock ${this.state.mocks.length + 1}`,
    //         description: `Description ${this.state.mocks.length + 1}`,
    //         lessons: [],
    //       };
    //   this.setState((prevState) => ({
    //     mocks: [...prevState.mocks, newMock],
    //   }));
    // };
  render() {
    const{ handleAddThemeClick}=this.props
    return (


      <div>CourseInfo</div>
    )
  }
}
