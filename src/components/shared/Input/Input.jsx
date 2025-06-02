import './Input.css'

function Input({ name, iconBefore: IconBefore, placeholder }) {
    return (
      <div className='input'>
        {IconBefore && <span className='input__icon'><IconBefore/></span>}
        <input
          className="input__field"
          type="text"
          name={name}
          placeholder={placeholder}
        />
      </div>
    );
}

export default Input;