import {
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved,
  } from '@testing-library/react';
  
  import { Async } from '.';
  
  test('it renders correctly', async () => {
    render(<Async />);
  
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  
    await waitForElementToBeRemoved(screen.queryByText('Juliana'))
  
    waitFor(() => (
      expect(screen.findByText('Maria')).toBeInTheDocument()
    ));
  
    
    
  });
  
  /* o teste nao espera o tempo de renderização de componente com setTimeout no button por exemplo, 
    sendo assim, o teste irá dar erro utilizando getByText.
    Soluções: 
    findByText -> ele esperará o tempo definido no componente e realizará o teste.
    WaitFor -> fica executando o codigo varias vezes ate que o expect passe
    waitForElementToBeRemoved -> para componentes que sumirá da tela depois de um tempo
    */